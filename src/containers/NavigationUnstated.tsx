let App = () => (
  <Provider>
    <Subscribe to={[DataContainer]}>
      {(dataContainer: DataContainer) =>
        <StackNav dataContainer={dataContainer}/>
      }
    </Subscribe>
  </Provider>
)
export default App;
interface StackNavProps {
  dataContainer: DataContainer
}
class StackNav extends React.Component<StackNavProps, any> {
  stackNav = createStackNavigator({
    Home: { 
      screen: (props: HomeScreenProps) => 
        <HomeScreen 
          {...props} 
          dataContainer={this.props.dataContainer}/> 
    }
  );
  
  public render() {
    return <this.stackNav />
  }
}