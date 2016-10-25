package com.andrei.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.cors.CorsUtils;

/**
 * Created by tim on 6/29/16.
 */
@Configuration
@EnableWebMvcSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {



    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {

/*
        http
                .authorizeRequests()
                .antMatchers().permitAll()
                .anyRequest().permitAll().and()
                .formLogin()
                .loginPage("/login")
                .permitAll();
*/

        http
                .authorizeRequests()
                .requestMatchers(CorsUtils::isCorsRequest).permitAll()
                .antMatchers("/resources/**", "/registration").permitAll()
                .anyRequest().authenticated()
                .and().httpBasic()
                .and().addFilterBefore(new WebSecurityCorsFilter(), ChannelProcessingFilter.class)
              //  .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
                .csrf().disable();


/*
       http.authorizeRequests()
                .antMatchers("/resources/**", "/registration").permitAll()
                .anyRequest().authenticated().and()
                .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
                .logout()
                .permitAll();
/*
       .and().addFilterAfter(csrfFilter, CsrfFilter.class).headers().xssProtection().and().cacheControl();

/*
        http.authorizeRequests()
                .antMatchers("/").permitAll().anyRequest()
                .authenticated().and()
                .addFilterAfter(new CORSFilter(), CsrfFilter.class).formLogin()
                .loginPage("/login");

*/
    }

    private CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName("X-XSRF-TOKEN");
        return repository;
    }



}