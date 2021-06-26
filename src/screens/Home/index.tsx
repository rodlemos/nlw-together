import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Loading } from '../../components/Loading';
import { Profile } from '../../components/Profile';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Styles } from './styles';


export function Home() {
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentProps[]>([])
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentClick(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', {guildSelected})
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(()=> {
        loadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </View>

                <View>
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
                </View>

                {
                    loading ? <Loading/>
                    :<>
                        <View style={Styles.content}>
                            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />
                        </View>

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}
                                    onPress={()=> handleAppointmentClick(item)}
                                />
                            )}
                            style={Styles.matches}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 24 }}
                        />
                    </>
                }
            </View>
        </Background>
    )
}