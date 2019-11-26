package org.sid.demo.sec;

public interface SecurityParams {
    public static final String JWT_HEADER_NAME="Authorization";
    public static final String SECRET="hadouaniothmane2@gmail.com";
    public static final long EXPIRATION=60000*60;
    public static final String HEADER_PREFIX="Bearer ";
}
