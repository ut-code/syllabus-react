// Grid要素を用いると、領域を比で分割することができる
import {Grid} from "@mantine/core"
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
        <div style={{"borderColor":"gray","borderWidth":"2px", "borderStyle":"solid"}}>

            {/* 曜日の表示 */}
            <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}} >

                {/* 右上の空欄 */}
                <SlotElement key={""} height={30} span={0.5}/>

                {/* 曜日 */}
                {weekdays.map(x=><SlotElement key={""} height={30} span={1}>{x}</SlotElement>)}

            </Grid>

            {/* 1-6限のスロット */}
            {periods.map(x=><PeriodElement key={x} n={x}/>)}

            {/* 集中講義 */}
            <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}} >

                {/* 「集中」のラベル */}
                <SlotElement key={"label"} height={100} span={0.5}>集中</SlotElement>

                {/* 登録された集中講義のスロット */}
                <SlotElement key={""} height={100} span={5}>class name</SlotElement>
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
        <Grid columns={5.5} style={{padding:"7px 6px 7px 6px"}}>

            {/* 時限のラベル */}
            <SlotElement key={n.toString()} height={100} span={0.5}>{n}</SlotElement>

            {/* 講義を表示するスロット */}
            {weekdays.map(x=><SlotElement key={x+n} height={100} span={1}>class name</SlotElement>)}
        </Grid>
    )
}

/**
 * 講義を表示するスロット
 * [key:ループで生成する際のkey, height:要素の高さ, span:Gridのspan]
 */
const SlotElement=({children, key,height,span}:{children?:ReactNode,key:string, height:number,span:number })=>
    <Grid.Col key={key} span={span} style={{height:height, borderColor:"gray", borderWidth:"1px", borderStyle:"solid", alignItems:"center", display:"flex", justifyContent:"center"}}>{children}</Grid.Col>