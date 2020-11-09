package com.company.after1;
import com.company.Resource;

import java.util.Deque;
import java.util.List;
import java.util.NoSuchElementException;

public class ResourcePool {
    public Resource get(){
        Resource result;
        if(available.isEmpty()){
            result = Resource.create();
        }
        else {
            result = available.pop();
        }
        allocated.add(result);

        return result;
    }

    private Deque<Resource> available;
    private List<Resource> allocated;
}
