package com.app.ecommerce.utils;

import org.mindrot.jbcrypt.BCrypt;

public class Utils {
    
    // Default salt is 10
    public static String hashData(String data) {
        String hashed = BCrypt.hashpw(data, BCrypt.gensalt());
        return hashed;
    }

    public static boolean compareHashedData(String candidate, String hashed) {
        if (BCrypt.checkpw(candidate, hashed))
            return true;
        else
            return false;
    }
}
