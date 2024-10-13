import { Tabs } from "expo-router";
import { IonIcon } from "@/utils/Icons";

export default function TabLayout(){
    return (
    <Tabs
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#1C70EB",
    }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title:'Home',
                tabBarIcon: ({focused}) => (
                    <IonIcon size={30} name={focused ? 'grid' : 'grid-outline'} 
                    color={focused ? "#1C70EB" : ''}/>
                ),
            }} 
        />
         <Tabs.Screen
            name="Wallet/index"
            options={{
                title:'Wallet',
                tabBarIcon: ({focused}) => (
                    <IonIcon size={30} name={focused ? 'wallet' : 'wallet-outline'} 
                    color={focused ? "#1C70EB" : ''} />
                ),
            }} 
        />
         <Tabs.Screen
            name="Transactions/index"
            options={{
                title:'Transactions',
                tabBarIcon: ({focused}) => (
                    <IonIcon size={30} name={focused ? 'albums' : 'albums-outline'} 
                    color={focused ? "#1C70EB" : ''}/>
                ),
            }} 
        />
        <Tabs.Screen
            name="Settings/index"
            options={{
                title:'Settings',
                tabBarIcon: ({focused}) => (
                    <IonIcon size={23} name={focused ? 'settings' : 'settings-outline'} 
                    color={focused ? "#1C70EB" : ''}/>
                ),
            }} 
        />

    </Tabs>)
}