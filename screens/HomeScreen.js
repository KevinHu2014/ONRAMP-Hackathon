import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
    header: null,
  };
  state = {
    content: [],
  };
  componentWillMount() {
    this.setState({ data:  [
      {
        id: '001',
        title: 'EDM跟古典,流行樂一樣，都是音樂樂種之一',
        content: '\n\ 跟BBQ（烤肉）、OMG（Oh My God!）等食物或厘語取縮寫有點像，EDM是Electronic Dance Music取首文字的縮寫，直譯為「電子、舞動、音樂」（中譯為電子舞曲，簡稱電音）其中沒有任何一個單字與藥物或是搖頭有關聯，也就是說以合成器等電子樂器創造的「電子舞曲」，都可被歸類為EDM。',
      },
      {
        id: '002',
        title: '活動注意事項',
        content: '\n\ 為了維持活動安全與素質，請務必遵守主辦單位規定\n\ NO 場內禁止攜帶\n\ ● 依照民航局的要求，嚴禁攜帶氣球、空拍機、煙火、雷射筆，違法者民航局將依法開罰。\n\ ● 各式傘類、伸縮性自拍棒、旗桿、板凳、椅子或任何有可能有攻擊性的產品。',
      },
      {
        id: '003',
        title: 'EDM是音樂樂種之一',
        content: '\n\  EDM是Electronic Dance Music取首文字的縮寫，直譯為「電子、舞動、音樂」（中譯為電子舞曲，簡稱電音）其中沒有任何一個單字與藥物或是搖頭有關聯，也就是說以合成器等電子樂器創造的「電子舞曲」，都可被歸類為EDM。',
      },
      {
        id: '004',
        title: 'NO 場內禁止攜帶',
        content: '\n\ ● 煙火、刀械、棍棒與玻璃瓶類的物品 \n\ ● 非法物品、毒品及危險物品。\n\ ● 已拆封之香菸盒、打火機、電子菸、菸油入場 ( 場內吸菸區會有專屬點火用品可使用 )。',
      },
      {
        id: '005',
        title: 'EDM跟古典、流行樂一樣，都是音樂樂種之一',
        content: '\n\ 跟BBQ（烤肉）、OMG（Oh My God!）等食物或厘語取縮寫有點像，EDM是Electronic Dance Music取首文字的縮寫，直譯為「電子、舞動、音樂」（中譯為電子舞曲，簡稱電音）其中沒有任何一個單字與藥物或是搖頭有關聯，也就是說以合成器等電子樂器創造的「電子舞曲」，都可被歸類為EDM。',
      },
      {
        id: '006',
        title: '活動注意事項',
        content: '\n\ 為了維持活動安全與素質，請務必遵守主辦單位規定\n\ NO 場內禁止攜帶\n\ ● 依照民航局的要求，嚴禁攜帶氣球、空拍機、煙火、雷射筆，違法者民航局將依法開罰。\n\ ● 各式傘類、伸縮性自拍棒、旗桿、板凳、椅子或任何有可能有攻擊性的產品。',
      },
      {
        id: '007',
        title: 'EDM跟古典、流行樂一樣，都是音樂樂種之一',
        content: '\n\ 跟BBQ（烤肉）、OMG（Oh My God!）等食物或厘語取縮寫有點像，EDM是Electronic Dance Music取首文字的縮寫，直譯為「電子、舞動、音樂」（中譯為電子舞曲，簡稱電音）其中沒有任何一個單字與藥物或是搖頭有關聯，也就是說以合成器等電子樂器創造的「電子舞曲」，都可被歸類為EDM。',
      },
    ]});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={{uri: 'https://aestw.files.wordpress.com/2016/01/profile-logo.png?w=192'}}
              style={styles.welcomeImage}
            />
          </View>
          {this.renderContent()}
        </ScrollView>
      </View>
    );
  }

  renderContent() {
    return this.state.data.map(
      data => (
        <View key={data.id} style={styles.helpContainer}>
          <CardSection>
              <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>

                <Text numberOfLines={1} style={styles.helpLinkText }>{data.title}</Text>

                <Text>{data.content.substring(0,60)}</Text>

              </TouchableOpacity>
          </CardSection>

        </View>
      )
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 10,
  },
  helpLink: {
    paddingVertical: 0,
    justifyContent: 'space-between',
    flexDirection: 'column',

  },
  helpLinkText: {
    fontSize: 22,
    color: '#2e78b7',
    fontWeight: 'bold',
    //alignItems:'flex-start'

  },
});
