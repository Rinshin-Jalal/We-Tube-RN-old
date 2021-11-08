import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Footer = () => {
    return (
        <View style={{
            backgroundColor: "#0f0f0f",
            padding: 10,
            height: 70,
            justifyContent: "center"
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/300/ffffff/home-page--v1.png"
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/300/ffffff/compass--v1.png"
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require("../assets/uploadImage.png")} 
                    style={styles.icons}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/300/ffffff/video-playlist.png"
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/300/ffffff/filled-appointment-reminders.png"
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    icons: {
        width: 35,
        height: 35,
        padding: 10
    }
})
