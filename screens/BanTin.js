import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,ScrollView
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon , Header} from 'native-base'

class BanTin extends Component {

    render() {

        const images = {

            "1": require('../assets/images/1.jpg'),
            "2": require('../assets/images/2.jpg'),
            "3": require('../assets/images/3.png')
        }

        return (
            
            <ScrollView>
                <Header />
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/images/icon.png')} />
                        <Body>
                            <Text>Đâu Phải Phát </Text>
                            <Text note>17 Tháng 4 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/images/1.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent  onPress={() => alert('Chạm TIM nhẹ hoy nhen !') }>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent  onPress={() => alert('Chạm CHAT nhẹ hoy nhen !') }>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent  onPress={() => alert('Chạm Share nhẹ hoy nhen !')} >
                            <Icon name="ios-share-alt-outline" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>869 thích </Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={{ fontWeight: "900" }}> NGÀY HỘI MÁY TÍNH
                            </Text>
< Text > Là sự kiện hằng năm của Khoa Kỹ Thuật - Công Nghệ
    .Nay được tổ chức bởi các thành viên từ Câu lạc bộ Công Nghệ Thông Tin(Information Technology Club - ITC)
    .Với mong muốn mang lại cho các sinh viên trường Đại học Văn Hiến nhận được những sự giúp đỡ thiết thực về vấn đề sửa chữa phần mềm máy tính xách tay với GIÁ HẠT DẺ hay sự tư vấn sử dụng,
chọn mua,
nâng cấp laptop MIỄN PHÍ. </Text>
                        <Text>Đến với Ngày hội máy tính, bạn sẽ được:</Text>
<Text></Text>
<Text>💡 Sửa chữa máy tính (phần mềm).</Text>
<Text>💡 Bảo dưỡng máy tính. </Text>
<Text>💡 Cài đặt phần mềm.</Text>
<Text>💡 Tư vấn sử dụng laptop đúng cách, hiệu quả.</Text>
<Text>💡 Tư vấn chọn mua máy tính, điện thoại.</Text>

                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/images/icon.png')} />
                        <Body>
                            <Text>Đâu Phải Phát </Text>
                            <Text note>17 Tháng 4 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/images/2.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>869 thích </Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={{ fontWeight: "900" }}> NGÀY HỘI MÁY TÍNH
                            </Text>
< Text > Là sự kiện hằng năm của Khoa Kỹ Thuật - Công Nghệ
    .Nay được tổ chức bởi các thành viên từ Câu lạc bộ Công Nghệ Thông Tin(Information Technology Club - ITC)
    .Với mong muốn mang lại cho các sinh viên trường Đại học Văn Hiến nhận được những sự giúp đỡ thiết thực về vấn đề sửa chữa phần mềm máy tính xách tay với GIÁ HẠT DẺ hay sự tư vấn sử dụng,
chọn mua,
nâng cấp laptop MIỄN PHÍ. </Text>
                        <Text>Đến với Ngày hội máy tính, bạn sẽ được:</Text>
<Text></Text>
<Text>💡 Sửa chữa máy tính (phần mềm).</Text>
<Text>💡 Bảo dưỡng máy tính. </Text>
<Text>💡 Cài đặt phần mềm.</Text>
<Text>💡 Tư vấn sử dụng laptop đúng cách, hiệu quả.</Text>
<Text>💡 Tư vấn chọn mua máy tính, điện thoại.</Text>

                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/images/icon.png')} />
                        <Body>
                            <Text>Đâu Phải Phát </Text>
                            <Text note>17 Tháng 4 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/images/4.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>869 thích </Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={{ fontWeight: "900" }}> NGÀY HỘI MÁY TÍNH
                            </Text>
< Text > Là sự kiện hằng năm của Khoa Kỹ Thuật - Công Nghệ
    .Nay được tổ chức bởi các thành viên từ Câu lạc bộ Công Nghệ Thông Tin(Information Technology Club - ITC)
    .Với mong muốn mang lại cho các sinh viên trường Đại học Văn Hiến nhận được những sự giúp đỡ thiết thực về vấn đề sửa chữa phần mềm máy tính xách tay với GIÁ HẠT DẺ hay sự tư vấn sử dụng,
chọn mua,
nâng cấp laptop MIỄN PHÍ. </Text>
                        <Text>Đến với Ngày hội máy tính, bạn sẽ được:</Text>
<Text></Text>
<Text>💡 Sửa chữa máy tính (phần mềm).</Text>
<Text>💡 Bảo dưỡng máy tính. </Text>
<Text>💡 Cài đặt phần mềm.</Text>
<Text>💡 Tư vấn sử dụng laptop đúng cách, hiệu quả.</Text>
<Text>💡 Tư vấn chọn mua máy tính, điện thoại.</Text>

                    </Body>
                </CardItem>
            </Card>
            </ScrollView>  );
    }
    
}
export default BanTin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});