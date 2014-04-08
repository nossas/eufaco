class CreateUsersForeignTableOlive < ActiveRecord::Migration
  def up
    if Rails.env.production? || Rails.env.staging?
      execute(
      %Q{
        CREATE FOREIGN TABLE users(
          id integer,
          email character varying(255) DEFAULT ''::character varying,
          first_name character varying(255),
          last_name character varying(255)
        )
        SERVER meurio_accounts
        OPTIONS (table_name 'users');
      }
      )
    end
  end

  def down
    if Rails.env.production? || Rails.env.staging?
      execute 'DROP FOREIGN TABLE users;'
    end
  end
end
