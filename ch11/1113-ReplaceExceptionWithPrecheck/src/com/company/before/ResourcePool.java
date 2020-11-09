package com.company.before;
import com.company.Resource;

import java.util.Deque;
import java.util.List;
import java.util.NoSuchElementException;

public class ResourcePool {
    public Resource get(){
        Resource result;
        try{
            result = available.pop();
            allocated.add(result);
        } catch(NoSuchElementException e) {
            result = Resource.create();
            allocated.add(result);
        }

        return result;
    }

    private Deque<Resource> available;
    private List<Resource> allocated;
}
