import {Grid} from "@mantine/core"

function GetSlotStyle(height:number){
    return {"borderColor":"gray","borderWidth":"1px", "borderStyle":"solid", "height":height, padding:0, "margin":"auto","alignItems":"center",display:"flex",justifyContent:"center"};
}

export function Timetable(){

    const periods = [1,2,3,4,5,6];
    const weekdays = ["月","火","水","木","金"]

    return(
        <div style={{"borderColor":"gray","borderWidth":"2px", "borderStyle":"solid"}}>
            <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}} >
                <Grid.Col span={0.5} style={GetSlotStyle(30)}><div></div></Grid.Col>
                {weekdays.map(x=><Grid.Col key={x} span={1} style={GetSlotStyle(30)}>{x}</Grid.Col>)}
            </Grid>
            <div >
            {periods.map(x=><PeriodSlot key={x} n={x}/>)}
            </div>
            <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}} >
                <Grid.Col span={0.5} style={GetSlotStyle(100)}><div>集中</div></Grid.Col>
                <Grid.Col span={5} style={GetSlotStyle(100)}></Grid.Col>
            </Grid>
        </div>
    )
}

function PeriodSlot(props:{n:number}){
    return(
        <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}}>
        <PeriodLabel n={props.n} span={0.5}/>
        {
            Array.from({ length: 5 }, (_, i) => i + 1).map(x=>{
                return <Grid.Col key={x} span={1} style={GetSlotStyle(100)}>class name</Grid.Col>
            })
        }
    </Grid>
    )
}

function PeriodLabel(props:{n:number, span:number}){
    return (
        <Grid.Col style={GetSlotStyle(100)} span={props.span}>
            <Grid columns={2} w={"80%"}>
                <Grid.Col span={1} m={"auto"}>
                    <div >{props.n}</div>
                    </Grid.Col>
                {/* <Grid.Col span={1}>
                    <div>11:00</div>
                    <div>12:00</div>
                </Grid.Col> */}
            </Grid>
        </Grid.Col>
    )
}
