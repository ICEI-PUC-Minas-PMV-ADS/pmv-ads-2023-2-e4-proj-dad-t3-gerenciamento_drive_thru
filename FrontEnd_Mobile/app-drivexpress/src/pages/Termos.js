import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {Card, Text, Button} from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';


const Termos = () => {
const navigation = useNavigation();
  return (

    <Container>
    

  <Body>
<ScrollView>
    <Cards
           foto={{ uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/cecf7264ad00a15de75d1ff7765c229b", }}
           nome={"Termos de uso DriveXpress"}
           texto = {`Bem-vindo ao DriveXpress, um aplicativo inovador desenvolvido para facilitar a experiência de pedidos em restaurantes que operam no modelo drive thru. Antes de utilizar nosso aplicativo, pedimos que você leia atentamente e concorde com os Termos de Uso a seguir.

1. Aceitação dos Termos

1.1 Ao baixar, instalar e utilizar o aplicativo DriveXpress, você concorda expressamente com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize o aplicativo.

2. Uso do Aplicativo

2.1 Cadastro e Conta:
Para utilizar os recursos completos do DriveXpress, você pode precisar criar uma conta. Ao fazer isso, você concorda em fornecer informações precisas, completas e atualizadas. Você é responsável por manter a confidencialidade de sua conta e senha.

2.2 Uso Adequado:
Você concorda em utilizar o aplicativo DriveXpress apenas para fins legítimos e de acordo com todas as leis e regulamentos aplicáveis.

3. Pedidos e Pagamentos

3.1 Realização de Pedidos:
O DriveXpress permite que você faça pedidos em restaurantes parceiros que operam no modelo drive thru. Após realizar um pedido, as informações serão transmitidas ao restaurante para preparação.

3.2 Pagamentos:
O aplicativo pode oferecer opções de pagamento online. Ao realizar um pagamento, você concorda que é responsável por todas as transações associadas à sua conta.

4. Privacidade e Segurança

4.1 Dados do Usuário:
Ao utilizar o DriveXpress, você concorda com a coleta, armazenamento e uso de suas informações de acordo com nossa Política de Privacidade.

4.2 Segurança:
Você concorda em não tentar contornar ou comprometer a segurança do aplicativo, bem como não acessar áreas restritas sem autorização.

5. Atualizações e Modificações

O DriveXpress pode ser atualizado periodicamente para melhorar seu desempenho e adicionar novos recursos. Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, e tais modificações serão efetivas imediatamente após a publicação no aplicativo.

6. Encerramento de Conta

Reservamo-nos o direito de encerrar ou suspender sua conta a nosso critério, sem aviso prévio, se violar estes Termos de Uso.

Ao utilizar o DriveXpress, você concorda integralmente com estes Termos de Uso. O não cumprimento destes termos pode resultar na suspensão ou encerramento de sua conta.

Obrigado por escolher o DriveXpress. Esperamos que sua experiência de pedido seja eficiente e satisfatória! `} 
    botao={"Li e aceito os termos"}

    />

</ScrollView>
</Body>
    
    </Container>
  );

};

export default Termos;