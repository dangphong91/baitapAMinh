package com.phong.formatter;

import com.phong.model.User;
import com.phong.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.Formatter;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Locale;
import java.util.Optional;

@Component
public class UserFormatter implements Formatter<User> {

    private IUserService iUserService;

    @Autowired
    public UserFormatter(IUserService iUserService){
        this.iUserService = iUserService;
    }

    @Override
    public User parse(String text, Locale locale) throws ParseException {
        Optional<User> userOptional = iUserService.findById(Long.parseLong(text));
        return userOptional.orElse(null);
    }

    @Override
    public String print(User user, Locale locale) {
        return "[" + user.getId() + ", " +user.getEmail() + "]";
    }
}