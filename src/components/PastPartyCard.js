import React from "react";
import { View, StyleSheet, Dimensions, Animated, Button, TouchableOpacity } from "react-native";
import { Text } from "galio-framework";
import { Card, Avatar, Chip, Divider } from "react-native-paper";
import { useFriends, useUser, useInvites } from "lib";
import moment from "moment";
import { GradientButton } from "./";
export const PastPartyCard = ({ invite, onPress }) => {
    const { friends } = useFriends();
    const { user } = useUser();

    const data = friends?.find(item => item.uidvalue == invite.inviter)
    const id = invite.inviter
    console.log(data)
    console.log(user)
    const time = new Date(invite.timestamp.toDate())
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;


    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Card style={[styles.card, { marginBottom: 20 }]} elevation={1}>

                    <Card.Content style={styles.innerCard}>
                        <TouchableOpacity></TouchableOpacity>
                        {invite.inviter != user.uidvalue && (
                            <View flexDirection="row" flex={1} alignItems="center">
                                <Avatar.Image
                                    size={65}
                                    source={{ uri: invite.imagePath }}
                                    style={{ marginRight: 10 }}
                                />
                                <View flex={1} flexDirection="column">
                                    <Text style={[styles.text, { fontSize: 15 }]}>
                                        Organized by
                                </Text>
                                    <Text
                                        style={[styles.text, { fontSize: 24 }]}
                                        numberOfLines={1}
                                        ellipsizeMode="tail" //new comment
                                    >
                                        {data?.firstName} {data?.lastName}
                                    </Text>
                                    <Text
                                        style={[styles.text, { fontSize: 20, marginTop: 5 }]}
                                        numberOfLines={1}

                                    >
                                        {time.getMonth()}/{time.getDate()} at {strTime}
                                    </Text>
                                </View>

                            </View>
                        )}

                        {invite.inviter == user.uidvalue && (
                            <View flexDirection="row" flex={1} alignItems="center">
                                <Avatar.Image
                                    size={65}
                                    source={{ uri: invite.imagePath }}
                                    style={{ marginRight: 15 }}
                                />
                                <View flex={1} flexDirection="column">
                                    <Text style={[styles.text, { fontSize: 15 }]}>
                                        Organized by
                                </Text>
                                    <Text
                                        style={[styles.text, { fontSize: 24 }]}
                                        numberOfLines={1}
                                        ellipsizeMode="tail" //new comment
                                    >
                                        {user?.firstName} {user?.lastName}
                                    </Text>
                                    <Text
                                        style={[styles.text, { fontSize: 20, marginTop: 5 }]}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {time.getMonth()}/{time.getDate()} at {strTime}
                                    </Text>
                                </View>

                            </View>
                        )}

                        <View style={{ marginTop: 2, marginRight: 2 }}>
                            <Text style={{
                                fontSize: 10, color: '#E85F73', textDecorationLine: 'underline',
                            }}>
                                Tap card for details
                        </Text>
                        </View>


                    </Card.Content>

                </Card>
            </TouchableOpacity>
        </View>
    );
};

export default PastPartyCard;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width - 20 * 2,
        paddingHorizontal: 2,
    },
    card: {
        borderRadius: 15,
        shadowRadius: 2,
    },
    buttonContainer: {
        justifyContent: "center",
    },
    innerCard: {
        flexDirection: "row",


    },
    subText: {
        fontFamily: "Kollektif",
        color: "#f76f6d",
        // marginBottom: "7%",
    },
    text: {
        fontFamily: "Kollektif",
        // marginTop: "5%",
        fontSize: 17,
        fontWeight: "bold",
    },
    handle: {},
    name: {
        // fontWeight: "700",
    },
    nameContainer: {
        marginHorizontal: 15,
        flex: 1,
        // backgroundColor: "red",
    },
    buttonStyle: {
        minWidth: 150,
        marginVertical: 10,
    },
    chipContainer: {
        // backgroundColor: "blue",
        flex: 1,
    },
});
