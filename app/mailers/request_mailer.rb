class RequestMailer < ActionMailer::Base
  default from: "Fernanda - Meu Rio <contato@meurio.org.br>", to: "Fernanda - Meu Rio <contato@meurio.org.br>"

  def we_received_your_request request
    @user = request.user
    headers "X-SMTPAPI" => "{ \"category\": [\"eufaco\", \"we_received_your_request\"] }"
    mail(to: @user.email, subject: "Meu Rio - Vamos Festejar!")
  end

  def membership_card_requested request
    @user = request.user
    headers "X-SMTPAPI" => "{ \"category\": [\"eufaco\", \"membership_card_requested\"] }"
    mail(subject: "Meu Rio Eu Faço - Solicitação de Carteirinha!", from: "#{@user.first_name} #{@user.last_name} <#{@user.email}>")
  end

  def contact form
    @message = form[:contact_message]
    headers "X-SMTPAPI" => "{ \"category\": [\"eufaco\", \"contact\"] }"
    mail(subject: form[:contact_subject], from: "#{form[:contact_name]} <#{form[:contact_email]}>")
  end
end
