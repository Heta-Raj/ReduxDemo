import React, { useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/reducer/user";


const Home = () => {
    const dispatch = useDispatch()
    const myData = useSelector(state => { return state?.user?.data });

    useEffect(() => {
        dispatch(getData())
    }, [])

    const renderData = ({ item }) => {
        console.log("item", item);

        return (
            <View style={{ borderWidth: 1, margin: 10, padding: 10, }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                    {"Title: " + item?.title}
                </Text>
                <Text>
                    {"Body: " + item?.body}
                </Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={myData}
                renderItem={renderData} />
        </SafeAreaView>
    )
}

export default Home;