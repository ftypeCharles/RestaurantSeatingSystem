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
public class Table {
    
    private int totalSeats;//seats available in the restaurant
    private int xCoordinate;//x for ui
    private int ycoordinate;//y for placing table in ui
    private String tableDirection;
    private boolean isOccupied;
    private int tableHeight;
    private int tableWidth;
    
    public boolean tableIsUsed(){
        return isOccupied;
    }
    
    public void setSeats(int totalSeats){
        totalSeats = this.totalSeats;
    }
    
    public void setDirection(String setDirection){
        setDirection = this.tableDirection;
    }
    
    public void drawTables(){
        
    }
}
