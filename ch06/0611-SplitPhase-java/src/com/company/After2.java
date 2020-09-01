package com.company;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class After2 {

    public static void main(String[] args) {
        try{
            System.out.println(run(args));;
        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    static long run(String[] args) throws java.io.IOException {
        CommandLine commandLine = new CommandLine(args);
        return countOrders(commandLine);
    }

    private static long countOrders(CommandLine commandLine) throws java.io.IOException {
        File input = Paths.get(commandLine.filename()).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class) ;

        if(commandLine.onlyCountReady())
            return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
        else
            return orders.length;
    }
}
