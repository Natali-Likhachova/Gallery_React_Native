import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';


const styles = StyleSheet.create({
    heading: {
        padding: 30,
        fontSize: 50,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    photo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'center',
    },

    box: {
        //margin: 20,
    },
});

export default class Gallery extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Gallery</Text>
                    <View style={styles.photo}>
                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/d-archipov.jpg", width: 150, height: 100}}/>
                            <Text>
                                Dmitry Arkhipov
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/d-budkov.jpg",  width: 150, height: 100}}/>
                            <Text>
                                Denis Budkov
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/m-vershinin.jpg",  width: 150, height: 100}}/>
                            <Text>
                                Mikhail Vershinin
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/gaponyuk.jpg", width: 150, height: 100}}/>
                            <Text>
                                Oleg Gaponyuk
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/korzonov.jpg", width: 150, height: 100}}/>
                            <Text>
                                Daniil Korzhonov
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/v-medvedev_3.jpg", width: 150, height: 100}}/>
                            <Text>
                                Vladimir Medvedev
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/pustovoy.jpg", width: 150, height: 100}}/>
                            <Text>
                                Yuri Pustovoi
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/1600pano_v03_full_size.jpg", width: 150, height: 100}}/>
                            <Text>
                                Sergey Semenov
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "https://rosphoto.com/images/u/articles/1407/sokolovsky.jpg", width: 150, height: 100}}/>
                            <Text>
                                Vlad Sokolovsky
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/a-suloev.jpg", width: 150, height: 100}}/>
                            <Text>
                                Alexey Suloev
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "https://rosphoto.com/images/u/articles/1407/k-uytnov.jpg", width: 150, height: 100}}/>
                            <Text>
                                Kirill Uyutnov
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/l-halfen.jpg", width: 150, height: 100}}/>
                            <Text>
                                Leonid Halfen
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/shpilenok.jpg", width: 150, height: 100}}/>
                            <Text>
                                Igor Shpilenok
                            </Text>
                        </View>

                        <View style={styles.box}>
                            <Image source={{
                                uri: "http://www.rosphoto.com/images/u/articles/1407/altay.jpg", width: 150, height: 100}}/>
                            <Text>
                                Alexey Ebel
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}