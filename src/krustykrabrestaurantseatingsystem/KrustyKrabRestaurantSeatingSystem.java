/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package krustykrabrestaurantseatingsystem;

/**
 *
 * @author charleslyding
 */
public class KrustyKrabRestaurantSeatingSystem {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        //HI!
        System.out.println("HI!");
        
        Reservation r = new Reservation("charles", "lyding", null, "1/1/2018","1:11");
        ReservationList l = new ReservationList();
        l.addToList(r);
        
    }
    
}
