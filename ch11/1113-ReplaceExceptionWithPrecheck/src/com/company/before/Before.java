package com.company.before;

import com.company.Resource;

public class Before {

    public static void main(String[] args) {
	    ResourcePool pool = new ResourcePool();
	    Resource resource = pool.get();
    }
}
