import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View ,Text} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ExitApp from '@/components/exit/ExitApp';

export default function TabTwoScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>other</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
