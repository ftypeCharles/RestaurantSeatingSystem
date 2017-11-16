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
public class Reservation {
    
    private String fName;
    private String lName;
    Party p;
    private String date;
    private String time;

    public Reservation(String fName, String lName, Party p, String date, String time) {
        this.fName = fName;
        this.lName = lName;
        this.p = p;
        this.date = date;
        this.time = time;
    }

    
    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public Party getP() {
        return p;
    }

    public void setP(Party p) {
        this.p = p;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
    
    
}
