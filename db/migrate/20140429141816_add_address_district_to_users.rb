class AddAddressDistrictToUsers < ActiveRecord::Migration
  def change
    add_column :users, :address_district, :string
  end
end
