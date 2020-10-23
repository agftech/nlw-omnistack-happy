import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView, Image } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-elements";

import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const Simple: React.FC = () => {
	const navigation = useNavigation();

	const onDone = () => (
		<View style={styles.container}>
			<Icon
				style={styles.iconStyle}
				name='check-circle'
				type='font-awesome'
				size={44}
				color='white'
				onPress={() => navigation.navigate("OrphanagesMap")}
			/>
		</View>
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Onboarding
				DoneButtonComponent={onDone}
				showDone={true}
				showNext={false}
				showSkip={false}
				pages={[
					{
						backgroundColor: "#15c3d6",
						image: (
							<Image source={require("../../images/onboarding-one.png")} />
						),
						title: (
							<View style={styles.container}>
								<Text style={styles.title}>Leve felicidade para o mundo</Text>
							</View>
						),
						subtitle: (
							<View>
								<Text style={styles.subTitle}>
									Visite orfanatos e mude o dia de muitas crianças
								</Text>
							</View>
						),
					},
					{
						backgroundColor: "#15c3d6",
						image: (
							<Image source={require("../../images/onboarding-two.png")} />
						),
						title: (
							<View style={styles.container}>
								<Text style={styles.title}>
									Escolha um orfanato no mapa e faça uma visita
								</Text>
							</View>
						),
						subtitle: (
							<View>
								<Text style={styles.subTitle}>Ajude esta causa...</Text>
							</View>
						),
					},
					{
						title: (
							<View style={styles.container}>
								<Button
									title={"SIGN IN"}
									buttonStyle={{
										borderRadius: 20,
										width: 120,
										height: 54,
										backgroundColor: "#14b4c9",
									}}
									onPress={() => navigation.navigate("OrphanagesMap")}
								/>
							</View>
						),
						subtitle: "",
						backgroundColor: "#15c3d6",
						image: (
							<Icon
								name='user-circle'
								type='font-awesome'
								size={150}
								color='white'
							/>
						),
					},
				]}
			/>
		</SafeAreaView>
	);
};

export default Simple;

const styles = StyleSheet.create({
	container: {
		flex: 0,
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
		marginVertical: -15,
	},
	title: {
		marginLeft: 20,
		marginRight: 20,
		flex: 0,
		fontSize: 26,
		color: "white",
		padding: 1,
	},
	subTitle: {
		marginLeft: 28,
		marginRight: 10,
		fontSize: 18,
		color: "white",
		marginBottom: 60,
		padding: 5,
	},
	iconStyle: {
		marginRight: 50,
	},
});
