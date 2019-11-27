import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text, Button} from 'react-native';
import Photo from "./Photo"
import {styles} from "./styles";

//import {createAppContainer} from 'react-navigation';

export default class Gallery extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Gallery</Text>
                    <View style={styles.box}>
                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/d-archipov.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Dmitry Arkhipov"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/d-budkov.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Denis Budkov"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/m-vershinin.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Mikhail Vershinin"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/gaponyuk.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Oleg Gaponyuk"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/korzonov.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Daniil Korzhonov"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/v-medvedev_3.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Vladimir Medvedev"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/pustovoy.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Yuri Pustovoi"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/1600pano_v03_full_size.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Sergey Semenov"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "https://rosphoto.com/images/u/articles/1407/sokolovsky.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Vlad Sokolovsky"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/a-suloev.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Alexey Suloev"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "https://rosphoto.com/images/u/articles/1407/k-uytnov.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Kirill Uyutnov"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/l-halfen.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Leonid Halfen"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/shpilenok.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Igor Shpilenok"
                            />
                        </View>

                        <View>
                            <Photo
                                img={{
                                    uri: "http://www.rosphoto.com/images/u/articles/1407/altay.jpg",
                                    width: 150,
                                    height: 100
                                }}
                                author="Alexey Ebel"
                            />
                        </View>
                        {/*<Button onPress={() => this.props.navigation.navigate('test')} title="test"
                        >Go to test</Button>*/}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

/*
class Test extends Component{
    render() {
        return(
            <View>
                <Text>
                    This Test!)))
                </Text>
                <Button onPress={() => this.props.navigation.navigate('home')} title="home"
                >Go to home</Button>
            </View>
        )
    }
}

export default createAppContainer({
    home: Gallery,
    test: Test
})*/
