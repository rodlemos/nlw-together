import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';
import { Styles } from './styles';


type Props = ModalProps & {
    children: ReactNode;
    closeModal: ()=> void;
}

export default function ModalView({children, closeModal,...rest}:Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={Styles.overlay}>
                    <View style={Styles.container}>
                        <Background>
                            <View style={Styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
