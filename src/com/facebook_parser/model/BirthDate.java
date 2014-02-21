package com.facebook_parser.model;

import java.util.Calendar;

public class BirthDate {
    private int day;
    private int month;
    private int year;

    @SuppressWarnings("unused")
    public int getCurrentYear() {
        return currentYear;
    }

    private static final int currentYear = Calendar.getInstance().get(Calendar.YEAR);

    //todo посмотреть, что происходит с неполными датами
    public BirthDate(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public static BirthDate generateBirthDate(String input) {
        if (input == null)
            return new BirthDate(0, 0, 0);
        String[] inputs = input.split("\\.");
        try {
            if (inputs.length == 0)
                return new BirthDate(0, 0, 0);
            else if (inputs.length == 1)
                return new BirthDate(Integer.valueOf(inputs[0]), 0, 0);
            else if (inputs.length == 2)
                return new BirthDate(Integer.valueOf(inputs[0]), Integer.valueOf(inputs[1]), 0);
            else if (inputs.length == 3)
                return new BirthDate(Integer.valueOf(inputs[0]), Integer.valueOf(inputs[1]), Integer.valueOf(inputs[2]));
        } catch (NumberFormatException e) {
            //e.printStackTrace();
            return new BirthDate(0, 0, 0);
        }
        return new BirthDate(0, 0, 0);
    }

    public int getDay() {
        return day;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }

    // todo fix the first condition in respect that february lasts for 28 or 29 days etc.
    public boolean isNormal() {
        return (day > 0 && day < 32) && (month > 0 && month < 13) && (year > 1920 && year < currentYear);
    }

    @Override
    public String toString() {
        return "BirthDate{" +
                "day=" + day +
                ", month=" + month +
                ", year=" + year +
                '}';
    }
}