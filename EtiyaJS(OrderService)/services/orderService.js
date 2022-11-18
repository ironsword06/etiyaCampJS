import BaseService from "./baseService.js";
import { orders } from "../data/orders.js";

export default class OrderService extends BaseService {
    // constructor(loggers) {
    //     super(orders, loggers)
    // }
    // createOrder(entity){
    //     let isProduct = orders.filter(x => x.productId == entity.productId)
    //     let isUser = orders.filter(x => x.userId == entity.userId)
    //     if(isProduct.length == 0 && isUser.length==0){
    //         console.log("Böyle bir sipariş oluşturulamaz")
    //     }else if(isProduct.length == 0){
    //         console.log("ürün bulunamadı")

    //     }else if(isUser.length==0){
    //         console.log("kullanıcı bulunamadı")
    //     }else{
    //         return orders;
    //     }
    // }
    constructor(loggers){
        super(orders, loggers)
        this.list = orders
    }

    createOrder(entity){
        if((this.checkIfProductIsValid(entity) && this.checkIfUserIsValid(entity) )){
            orders.push(entity);
        }
        console.log("Siparişinizi gözden geçiriniz..")
    } 

    checkIfProductIsValid(entity){
        let orderCriteria = orders.filter(x=> x.productId == entity.productId)
        if(orderCriteria.length==0){
            return false
        }
        return true
    }
    checkIfUserIsValid(entity){
        let orderCriteria = orders.filter(x=> x.userId == entity.userId)
        if(orderCriteria.length==0){
            return false
        }
        return true
    }
};
