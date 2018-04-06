package microservices.book.multiplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class UserInterfaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserInterfaceApplication.class, args);
	}
}
