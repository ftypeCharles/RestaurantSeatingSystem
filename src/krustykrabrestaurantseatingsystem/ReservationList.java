/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package krustykrabrestaurantseatingsystem;

import java.util.ArrayList;
/**
 *
 * @author charleslyding
 */
public class ReservationList {
    
    ArrayList rList = new ArrayList();
    
    public ReservationList(){
        
    }
    
    public void addToList(Reservation r){
        rList.add(r);
    }
    
    
    
   
}
