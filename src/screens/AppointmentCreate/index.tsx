import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildProps } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';
import Header from '../../components/Header';
import ModalView from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../Guilds';
import { Styles } from './styles';

export default function AppointmentCreate() {
    const [category, setCategory] = useState('1');
    const [openModal, setOpenModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    
    const[day, setDay] = useState('');
    const[month, setMonth] = useState('');
    const[hours, setHours] = useState('');
    const[minutes, setMinutes] = useState('');
    const[description, setDescription] = useState('');

    const navigation = useNavigation()

    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenModal(false)
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hours}:${minutes}h`,
            description
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, 
            JSON.stringify([...appointments, newAppointment]));
        
            navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView
            style={Styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar partida"
                    />

                    <Text style={
                        [Styles.label,
                        { marginLeft: 24, marginTop: 32, marginBottom: 18 }]
                    }>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={Styles.form}>
                        <RectButton
                            onPress={handleOpenModal}
                        >
                            <View style={Styles.select}>
                                {
                                    guild.icon 
                                    ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> 
                                    : <View style={Styles.image} />
                                }
                                <View style={Styles.selectBody}>
                                    <Text style={Styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.headings}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={Styles.field}>
                            <View>
                                <Text style={[Styles.label, { marginBottom: 5 }]}>Dia e mês </Text>
                                <View style={Styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setDay}/>
                                    <Text style={Styles.divider}>/</Text>
                                    <SmallInput maxLength={2} onChangeText={setMonth}/>
                                </View>
                            </View>

                            <View>
                                <Text style={[Styles.label, { marginBottom: 5 }]}>Hora e minuto </Text>
                                <View style={Styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setHours}/>
                                    <Text style={Styles.divider}>:</Text>
                                    <SmallInput maxLength={2} onChangeText={setMinutes}/>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={[Styles.field, { marginBottom: 12 }]}>
                                <Text style={Styles.label}>Descrição</Text>
                                <Text style={Styles.textLimit}>Max 100 caracteres</Text>
                            </View>
                            <TextArea
                                multiline
                                maxLength={100}
                                numberOfLines={5}
                                autoCorrect={false}
                                onChangeText={setDescription}
                            />
                        </View>
                    </View>

                    <View style={Styles.footer}>
                        <Button title="Agendar" onPress={handleSave}/>
                    </View>
                </ScrollView>
            </Background>

            <ModalView visible={openModal} closeModal={handleCloseModal}>
                <Guilds handleGuildSelected={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}
