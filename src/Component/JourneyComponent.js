import React, { useState, useEffect } from "react";

import styles from "../Style/styles";

import axios from "axios";
import HTML from "react-native-render-html";
import { Card, CardItem } from "native-base";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

const JourneyComponent = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://192.168.1.6:50001/api/v1/trips");

      setResults(res.data.data);
    } catch (err) {}
  };

  if (!results) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ backgroundColor: "transparent" }}>
              <Card>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                </CardItem>
                {item && (
                  <CardItem>
                    <View>
                      <HTML
                        html={`${item.description.substring(0, 300)} ...`}
                        tagsStyles={{
                          img: {
                            maxWidth: 320,
                          },
                        }}
                      />
                    </View>
                  </CardItem>
                )}
              </Card>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default JourneyComponent;
