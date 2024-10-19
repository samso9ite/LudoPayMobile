import { View, Text, Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { ThemedText } from "../ThemedText";


  export default function GraphComp(props:any) {
    return(
        <View>
            <ThemedText type="default" color="#bdbdbd">{props?.title}</ThemedText>
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "#FCFEFF",
      backgroundGradientTo: "#FCFEFF",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 100) => `rgba(45,96,255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(189,189,189, ${opacity})`,
      style: {
        borderRadius: 16,
        // paddingRight:40
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    )
  }