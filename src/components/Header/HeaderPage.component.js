import React from 'react'
import {PageHeader, Tag , Button , Dropdown,
     Menu , Layout, Checkbox, Col, Row, Radio, Carousel} from 'antd'
import {Link, Route , BrowserRouter as Router , Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../Header/headerPage.css'
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import {PhoneOutlined , DollarCircleOutlined , TabletOutlined, FireOutlined,
    LikeOutlined , LaptopOutlined , MobileOutlined , UsbOutlined , DatabaseOutlined} from "@ant-design/icons"
import MobileList from '../Mobile/MobileList.component';
import MobileDetail from '../Mobile/MobileDetail.component';
import TableList from "../Tablet/TabletList.component";
import logoIGPhone from "../Header/IGPhone.png"
import {MobileDevices} from "../Data/mobileData"
import {TabletDevices} from "../Data/tabletData"

const {  Content, Footer , Sider } = Layout;
const { SubMenu } = Menu


export default class HeaderPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            phone : [
                {
                    name : "Apple"
                },
                {
                    name : "Samsung"
                },
                {
                    name : "Oppo"
                },
                {
                    name : "Realme"
                },
                {
                    name : "Asus"
                },
                {
                    name : "Xiaomi"
                },
                {
                    name : "Nokia"
                },
                {
                    name : "Huawei"
                },
            ],
            tablet : [
                {
                    name : "Ipad"
                },
                {
                    name : "Samsung"
                },
                {
                    name : "Huawei"
                }
            ],
            otherDevices : [
                {
                    name : "Accessory"
                },
                {
                    name : "Smart Watch"
                },
                {
                    name : "Sound"
                }
            ],
            laptop : [
                {
                    name : "MACBOOK"
                },
                {
                    name : "LENOVO"
                },
                {
                    name : "HP"
                },
                {
                    name : "ASUS"
                },
                {
                    name : "DELL"
                },
                {
                    name : "MSI"
                },
                {
                    name : "ACER"
                }
            ],
            memory : [
                {
                    name : "All"
                },
                {
                    name : "4GB"
                },
                {
                    name : "8GB"
                },{
                    name : "16GB"
                },{
                    name : "32GB"
                },{
                    name : "64GB"
                },{
                    name : "128GB"
                },{
                    name : "256GB"
                },{
                    name : "512GB"
                },
            ],
            brand : [
                {
                    name : "All"
                },
                {
                    name : "Apple"
                },
                {
                    name : "Samsung"
                },
                {
                    name : "Huawei"
                },
                {
                    name : "Realme"
                },
                {
                    name : "Oppo"
                }
            ],
            price : [
                {
                    name : "All"
                },
                {
                    name : "Less than 5 Million"
                },
                {
                    name : "More than 10 Million"
                },
                {
                    name : "5 to 10 Million"
                }
            ],
            filterPrice : "All",
            filterBrand : "All",
            filterMemory : "All",
            filterSaleOff : true,
            collapsed : false,
            mobileDevices : [],
            tabletDevices : [],
        }
    }

    mapDataToRow = (dataList) =>{
        const dataRow = dataList.map((data) =>{
            return(
                <Row className="row" >
                    <Radio
                    key = {"data" + data.name}
                    value = {data.name}>
                    {data.name}
                    </Radio>
                </Row>
            );
        });
        const dataCol = (
            <Col>
                {dataRow}
            </Col>
        );
        return dataCol;
    }
    // handleDefaultChecked = (statusChecked) =>{
    //     let isChecked = false;
    //     (statusChecked === "All") ? isChecked = true : isChecked = false
    //     return isChecked;
    // }
    mapDevicesToMenu = (Devices) =>{
        const menuItem = Devices.map((Device) =>{
            return (
                <Menu.Item 
                key = {Device.name}>
                    <Link to ="/mobiles" onClick ={this.handleFilterBrand}>{Device.name}</Link>
                </Menu.Item>
            );
        })
        const menu = (
            <Menu 
            onClick = {this.handleFilterBrandDropDown}
            >
                {menuItem}
            </Menu>
        )
        return menu;
    }
    ServiceTime = () => {
        let time = this.state.date.getHours();
        if (time > 7 && time < 20){
            console.log("Time : " + time);
            return true;
        }else{
            console.log("Time : " + time);
            return false;
        }
    }
    handleClickCollapsed = () =>{
        this.setState({
            collapsed : !this.state.collapsed
        })
    }
    handleFilterPrice = (e) =>{
        let price = e.target.value;
        console.log("Filter Price :" + price);
        this.setState({
            filterPrice : price
        })
    }
    handleFilterMemory = (e) =>{
        let memory = e.target.value;
        console.log("Filter Memory :" + memory);
        this.setState({
            filterMemory : memory
        })
    }
    handleFilterBrand = (e) =>{
        let brand = e.target.value;
        console.log("Filter Brand :" + brand);
        this.setState({
            filterBrand : brand
        })
    }
    handleFilterBrandDropDown = (e) =>{
        let brand = e.key;
        console.log("Filter Brand :" + brand);
        this.setState({
            filterBrand : brand
        })
    }
    handleFilterSaleOff = () =>{
        this.setState({
            filterSaleOff : !this.state.filterSaleOff
        });
    }
    handleMakeLinkPathForDevice = (device) => {
        const linkPath = "/detail/"+ device
        return linkPath;
    }
    handleCreateRouteMobile =()=>{
        const MobileDevicesLink = this.state.mobileDevices.map((mobile) =>{
            return(
                <Route exact path={mobile.link } component={MobileDetail}></Route>
            );
        })
        return MobileDevicesLink
    }
    componentDidMount(){
        this.setState({
            mobileDevices : MobileDevices.map((mobile) =>{
                mobile.link = this.handleMakeLinkPathForDevice(mobile.id);          
                return mobile;
            }),
            tabDevices : TabletDevices.map((tablet) =>{
                tablet.link = this.handleMakeLinkPathForDevice(tablet.id);          
                return tablet;
            }),
        });
    }
    handleClickTitle = () =>{
        this.setState({
            filterBrand : "All",
            filterPrice: "All",
            filterMemory : "All",
        })
    }

    render(){
        const Phone = this.mapDevicesToMenu(this.state.phone)
        const Tablet = this.mapDevicesToMenu(this.state.tablet)
        const Laptop = this.mapDevicesToMenu(this.state.laptop)
        const OtherDevices = this.mapDevicesToMenu(this.state.otherDevices)
        return(
            <div>
                <Router>
                <Layout>
                <PageHeader
                    onBack = {()=>window.history.back()}
                    style={{ position: 'fixed', zIndex: 99, width: '100%' }}
                    className = "header-page-site"
                    title = {
                        <Link
                        to = "/mobiles"
                        onClick = {this.handleClickTitle}
                        style = {{ color : "black" , cursor : "context-menu" }}
                        >
                            <img src={logoIGPhone} alt="logo" style={{ height : "30px"}}/>
                                IGPhone
                        </Link>}
                    subTitle = {"Give you the best service"}
                    tags = {[this.ServiceTime() ? 
                        <div 
                        key = "Status"
                        className = "inline">
                        <Tag 
                        color="gold">Open</Tag>
                        <HeaderSearch
                        placeholder = "Search Here"
                        >
                        </HeaderSearch>
                        </div>
                        : <div key = "Status">
                            <Tag color="red">Close</Tag>
                            <HeaderSearch
                            placeholder = "Search Here"
                            >
                            </HeaderSearch>
                        </div>,
                    ]}
                    extra = {[
                        <Dropdown
                        key = "phoneDropDown"
                        placement = "bottomCenter"
                        overlay = {Phone}
                        onChange = {this.handleFilterBrand}
                        >
                            <Button
                            onClick = {() => {
                                return (    
                                <Link 
                                onClick = {this.handleClickTitle()}
                                to = "/mobiles/" 
                                >
                                </Link>);
                            }}
                            style = {{ color : "black" , cursor : "context-menu"}}
                            >
                                <Link 
                                style = {{ color : "black" , cursor : "context-menu"}}
                        to ="/mobiles" onClick ={this.handleClickTitle}>{<MobileOutlined />}Phone</Link>
                            </Button>
                        </Dropdown>,
                        <Dropdown
                        key = "tabletDropDown"
                        placement = "bottomCenter"
                        overlay = {Tablet}
                        >
                            <Button
                            icon = {<TabletOutlined />}
                            >
                                Tablet
                            </Button>
                        </Dropdown>,
                        <Dropdown
                        key = "laptopDropDown"
                        placement = "bottomCenter"
                        overlay = {Laptop}
                        >
                            <Button
                            icon = {<LaptopOutlined />}>
                                Laptop
                            </Button>
                        </Dropdown>,
                        <Dropdown
                        key = "otherDropDown"
                        placement = "bottomCenter"
                        overlay = {OtherDevices}
                        >
                            <Button
                            icon = {<UsbOutlined />}
                            >
                                Other
                            </Button>
                        </Dropdown>,
                    ]}
                    >
                    </PageHeader>
                
                    
                <Layout 
                className = "layout"
                >
                <Sider 
                    style = {{position : "fixed" , overflow : "auto" , height : "100%" , marginTop : "77px"}}
                    theme = "light"
                    collapsible
                    collapsed = {this.state.collapsed} 
                    onCollapse={this.handleClickCollapsed}>
                        <Menu mode = "inline" className ="menu">
                            <SubMenu
                            subMenuKey = "subPrice"
                            title = "Price"
                            icon = {<DollarCircleOutlined />}
                            >
                                <Radio.Group
                                defaultValue = "All"
                                onChange={this.handleFilterPrice}
                                >
                                    {this.mapDataToRow(this.state.price)}
                                </Radio.Group>
                            </SubMenu>
                            <SubMenu
                            subMenuKey = "subBrand"
                            title ="Brand"
                            icon = {<LikeOutlined />}
                            >
                                <Radio.Group
                                defaultValue = "All"
                                onChange={this.handleFilterBrand}
                                >
                                    {this.mapDataToRow(this.state.brand)}
                                </Radio.Group>
                            </SubMenu>
                            <SubMenu
                            subMenuKey = "subMemory"
                            title ="Memory"
                            icon = {<DatabaseOutlined />}
                            >
                                <Radio.Group
                                defaultValue = "All"
                                onChange={this.handleFilterMemory}
                                >
                                    {this.mapDataToRow(this.state.memory)}
                                </Radio.Group>
                            </SubMenu>
                            <SubMenu
                            icon = {<FireOutlined />}
                            title = "Sale Off">
                                <Menu.Item key ="SaleOff">
                                    <Checkbox
                                    onChange = {this.handleFilterSaleOff}
                                    checked = {this.state.filterSaleOff}
                                    value = "SaleOff"
                                    >
                                        Sale Off
                                    </Checkbox>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content 
                    style = {(this.state.collapsed) ?  {marginLeft : "82px"} : {marginLeft : "202px"}}
                    className="content">
                        <Carousel 
                        style = {{marginTop : "60px"}}
                        className = "carousel"
                        autoplay>
                        <div>
                            <img 
                            className = "img-car"
                            src = "https://cdn.cellphones.com.vn/media/ltsoft/promotion/1600x600-01.png"
                            alt ={"carousel 1"}
                            >
                            </img>
                        </div>
                        <div>
                            <img 
                            className = "img-car"
                            src = "https://cdn.cellphones.com.vn/media/ltsoft/promotion/iwwalk_chic_17.6.20.png"
                            alt ={"carousel 2"}
                            >
                            </img>
                        </div>
                        <div>
                            <img 
                            className = "img-car"
                            src = "https://cdn.cellphones.com.vn/media/ltsoft/promotion/Sliding-800x300_sony.jpg"
                            alt ={"carousel 3"}
                            >
                            </img>
                        </div>
                        </Carousel>
                        <div className = "content-div">
                            {this.handleCreateRouteMobile()}
                            <Redirect exact from="/" to="/mobiles" />
                            <Route exact path="/mobiles/" 
                            render={(props) => (
                                <MobileList {...props} 
                                mobileList={this.state.mobileDevices} 
                                filterBrand ={this.state.filterBrand} 
                                filterPrice = {this.state.filterPrice}
                                filterMemory = {this.state.filterMemory}
                                filterSaleOff = {this.state.filterSaleOff}
                                />
                              )}
                            >
                            </Route>
                            <Route exact path="/tablets/" 
                            render={(props) => (
                                <TableList {...props} 
                                tabletList={this.state.tabletDevices} 
                                filterBrand ={this.state.filterBrand} 
                                filterPrice = {this.state.filterPrice}
                                filterMemory = {this.state.filterMemory}
                                filterSaleOff = {this.state.filterSaleOff}
                                />
                              )}
                            >
                            </Route>                        
                        </div>
                    </Content>
                </Layout>
                    <Footer style={{ textAlign: 'center' }}>
                        Created by DoDucTrung - {<PhoneOutlined />}Phone : 0922993996
                    </Footer>
                </Layout>
                </Router>
            </div>
        );
    }
}

