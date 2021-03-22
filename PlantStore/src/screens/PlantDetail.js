/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, View, Text, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import {icons, images, COLORS, SIZES, FONTS} from '../constants';
const RequirementBar = ({icon, barPercentage}) => {
    return (
        <View style={{height: 60, alignItems: 'center'}}>
            <View
                style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                }}>
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 30,
                        height: 30,
                    }}
                />
            </View>

            {/* Bar */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.gray,
                }}></View>

            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: barPercentage,
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.primary,
                }}></View>
        </View>
    );
};

const RequirementDetail = ({icon, label, detail}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 30,
                        height: 30,
                    }}
                />

                <Text
                    style={{
                        marginLeft: SIZES.base,
                        color: COLORS.secondary,
                        ...FONTS.h2,
                    }}>
                    {label}
                </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    style={{
                        marginLeft: SIZES.base,
                        color: COLORS.gray,
                        ...FONTS.h2,
                    }}>
                    {detail}
                </Text>
            </View>
        </View>
    );
};

const PlantDetail = ({navigation}) => {
    // Render

    function renderHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: SIZES.padding,
                    right: SIZES.padding,
                    width: '90%'
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 20,
                                backgroundColor: 'rgba(255,255,255,0.5)',
                            }}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                        onPress={() => {
                            console.log('Focus on pressed');
                        }}>
                        <Image
                            source={icons.focus}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: '10%', width: '100%'}}>
                    <View style={{width: '100%'}}>
                        <Text
                            style={{color: COLORS.white, width: '100%', fontSize: 28, fontWeight: '700'}}>
                            Растение
                            «Суперрастение»
                        </Text>
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
            </View>
        );
    }

    function renderRequirementsBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    justifyContent: 'space-between',
                }}>
                <RequirementBar icon={icons.sun} barPercentage="50%" />
                <RequirementBar icon={icons.drop} barPercentage="25%" />
                <RequirementBar icon={icons.temperature} barPercentage="80%" />
                <RequirementBar icon={icons.garden} barPercentage="30%" />
                <RequirementBar icon={icons.seed} barPercentage="50%" />
            </View>
        );
    }

    function renderRequirements() {
        return (
            <View
                style={{
                    flex: 2.5,
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    justifyContent: 'space-around',
                }}>
                <RequirementDetail
                    icon={icons.sun}
                    label="Свет"
                    detail="15°C"
                />
                <RequirementDetail
                    icon={icons.drop}
                    label="Вода"
                    detail="250 мл в день"
                />
                <RequirementDetail
                    icon={icons.temperature}
                    label="Комнатная температура"
                    detail="25°C"
                />
                <RequirementDetail
                    icon={icons.garden}
                    label="Почва"
                    detail="3 кг"
                />
                <RequirementDetail
                    icon={icons.seed}
                    label="Удобрение"
                    detail="150 Mg"
                />
            </View>
        );
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingVertical: SIZES.padding,
                }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.padding,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: COLORS.primary,
                    }}
                    onPress={() => {
                        console.log('Take Action');
                    }}>
                    <Text style={{color: COLORS.white, ...FONTS.h5}}>
                        Что надо сделать?
                    </Text>

                    <Image
                        source={icons.chevron}
                        resizeMode="contain"
                        style={{
                            marginLeft: SIZES.padding,
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.padding,
                    }}>
                    <Text
                        style={{flex: 1, color: COLORS.secondary, ...FONTS.h5}}>
                        Время выращивания - 2 недели
                    </Text>
                    <Image
                        source={icons.downArrow}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.secondary,
                            marginLeft: SIZES.base,
                            width: 20,
                            height: 20,
                        }}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={{height: '35%'}}>
                <Image
                    source={images.bannerBg}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            {/* Requirements */}
            <View
                style={{
                    flex: 1,
                    marginTop: -40,
                    backgroundColor: COLORS.lightGray,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding,
                }}>
                <Text
                    style={{
                        paddingHorizontal: SIZES.padding,
                        color: COLORS.secondary,
                        ...FONTS.h1,
                    }}>
                    Требования
                </Text>

                {renderRequirementsBar()}

                {renderRequirements()}

                {renderFooter()}
            </View>

            {renderHeader()}
            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default PlantDetail;
