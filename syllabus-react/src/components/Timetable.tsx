// Grid要素を用いると、領域を比で分割することができる
import {Grid, StyleProp} from "@mantine/core"
import { ReactNode } from "react";

// 時限(1-6)の列挙
const periods = [1,2,3,4,5,6];

// 曜日の列挙
const weekdays = ["月","火","水","木","金"]

/**
 * 作成された時間割の閲覧のための要素
 */
export function Timetable():JSX.Element{

    return(
        <div style={{"borderColor":"gray","borderWidth":"2px", "borderStyle":"solid", "marginTop":20}}>

            {/* 曜日の表示 */}
            <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}} >

                {/* 右上の空欄 */}
                <SlotElement slotKey={"blank-slot"} height={30} span={"auto"}/>

                {/* 曜日 */}
                {weekdays.map(x=><SlotElement slotKey={x} height={30} span={1}>{x}</SlotElement>)}

            </Grid>

            {/* 1-6限のスロット */}
            {periods.map(x=><PeriodElement key={x} n={x}/>)}

            {/* 集中講義 */}
            <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}} >

                {/* 「集中」のラベル */}
                <SlotElement slotKey={"intensive-lec-label"} height={100} span={"auto"}>集中</SlotElement>

                {/* 登録された集中講義のスロット */}
                <SlotElement slotKey={"intensive-lec-slot"} height={100} span={5}>class name</SlotElement>
            </Grid>

        </div>
    )
}

/**
 * 全曜日の1-6限のスロットを作成
 * [n:引数に時限]
 */
function PeriodElement({n}:{n:number}){
    return(
        <Grid key={"grid"+n} columns={5.5} style={{padding:"7px 6px 7px 6px"}}>

            {/* 時限のラベル */}
            <SlotElement slotKey={"slot"+n.toString()} height={100} span={"auto"}>{n}</SlotElement>

            {/* 講義を表示するスロット */}
            {weekdays.map(x=><SlotElement slotKey={x+n} height={100} span={1}>class name</SlotElement>)}
        </Grid>
    )
}

/**
 * 講義を表示するスロット
 * [key:ループで生成する際のkey, height:要素の高さ, span:Gridのspan]
 */
const SlotElement=({children, slotKey,height,span}:{children?:ReactNode,slotKey:string, height:number,span:StyleProp<number | 'auto' | 'content'> })=>
    <Grid.Col key={slotKey} span={span} style={{height:height, borderColor:"gray", borderWidth:"1px", borderStyle:"solid", alignItems:"center", display:"flex", justifyContent:"center", minWidth:10}}>{children}</Grid.Col>