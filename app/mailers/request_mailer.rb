class RequestMailer < ActionMailer::Base
  default from: "Fernanda - Meu Rio <contato@meurio.org.br>", to: "Fernanda - Meu Rio <contato@meurio.org.br>"

  def we_received_your_request request
    @user = request.user
    headers["X-MC-Tags"] = "eufaco,we_received_your_request"
    mail(to: @user.email, subject: "Recebemos sua solicitação!")
  end

  def membership_card_requested request
    @user = request.user
    headers["X-MC-Tags"] = "eufaco,membership_card_requested"
    mail(subject: "Carteirinha solicitada", from: "#{@user.first_name} #{@user.last_name} <#{@user.email}>")
  end
end