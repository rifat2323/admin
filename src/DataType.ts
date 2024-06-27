export type user ={
    userName:string,
    email:string,
    img:string,
    _id:string
}

export type UserDetails = {
    userInfo: {
        userName: string,
        email: string,
        img: string,
    },
    userBuyInfo?: {
        userId?: string,
        total?: number,
        salesAt?: Date,
        productIds?: {
            productId: {
                image: string,
                price: number,
                productName: string,
                id: string,
                brand: string
            },
            productCount: number
        }[]
    }[] | []
}

export type order ={
 _id:string,
 userId:string,
 productIdes:{
    
    
        productId:string,
        productCount:number
        _id:string
    

  }[],
  total:number,
  paid:boolean,
  deliveryStatus: "paid" | 'way' | 'delivered',
  active:boolean

}