"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { processResponse } from "@/utils"

interface PriceData {
   price: number
   high: number
   low: number
   time: string
}

const BASE_ENDPOINT = "https://api.priceto.day/v1"

const CurrencyPrices = () => {
   // ** variables
   const [currencyList, setCurrencyList] = useState<string[]>()
   const [symbolPrice, setSymbolPrice] = useState<PriceData>()
   const [base, setBase] = useState("")
   const [symbol, setSymbol] = useState("")

   // ** funtions
   const getCurrencyList = async () => {
      const res = await axios.get(`${BASE_ENDPOINT}/symbols`)
      const data = processResponse(res)
      setCurrencyList(data.symbols)
   }

   const getSymbolPrice = async () => {}

   useEffect(() => {
      getCurrencyList()
   }, [])

   return <div>CurrencyPrices</div>
}

export default CurrencyPrices
