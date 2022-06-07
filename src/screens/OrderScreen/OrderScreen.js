import { View, Text, FlatList } from 'react-native'
import OrderItem from '../../components/OrderItem/OrderItem'
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
    return (
        <View style={{ flex: 1, width: '100%',}}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderItem order={item} />}
            />
        </View>
    )
}

export default OrderScreen