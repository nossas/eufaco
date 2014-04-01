class RequestsController < InheritedResources::Base

  def create
    params[:ip] = request.remote_ip
    request = Request.create_from_user(request_params)
    redirect_to root_path
  end

  private

  def request_params
    params.permit(:first_name, :last_name, :email)
  end
end
