class Request < ActiveRecord::Base
  belongs_to :user
  validates :user_id, presence: true, uniqueness: true

  def self.create_from_user params
    user = User.find_by_email(params[:email])
    user = User.create(params) if user.nil?
    Request.where("user_id = ?", user.id).first_or_create(user_id: user.id)
  end
end
