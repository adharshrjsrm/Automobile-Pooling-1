package com.srmtech.automobilepoolingapp.repo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.srmtech.automobilepoolingapp.model.ConfirmationTokenModel;

@Repository("confirmationTokenRepository")
public interface ConfirmationTokenRepo extends CrudRepository<ConfirmationTokenModel, String> {
    ConfirmationTokenModel findByConfirmationToken(String confirmToken);
}
