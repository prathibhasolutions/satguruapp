export default {
    expo: {
        name: "satguru",
        slug: "satguru",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/images/icon1.png",
        scheme: "satguru",
        userInterfaceStyle: "automatic",
        newArchEnabled: true,
        ios: {
            supportsTablet: true

        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/android-icon-foreground1.png",
                backgroundImage: "./assets/images/android-icon-background1.png",
                monochromeImage: "./assets/images/android-icon-monochrome1.png",
                backgroundColor: "#E6F4FE"
            },
            edgeToEdgeEnabled: true,
            predictiveBackGestureEnabled: false,
            package: "com.prathibha.satguru"
        },
        web: {
            output: "static",
            favicon: "./assets/images/favicon1.png"

        },
        plugins: [
            "expo-router",
            [
                "expo-splash-screen",
                {
                    image: "./assets/images/splash-icon1.png",
                    imageWidth: 200,
                    resizeMode: "contain",
                    backgroundColor: "#ffffff",
                    dark: {
                        backgroundColor: "#000000"

                    }

                }

            ]

        ],
        experiments: {
            typedRoutes: true,
            reactCompiler: true

        },
        extra: {
            router: {},
            eas: {
                projectId: "2e8fe0c5-5ebd-4f05-b196-24bf0f213549"

            }

        }

    }
};
