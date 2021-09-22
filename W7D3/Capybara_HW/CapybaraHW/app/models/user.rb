class User < ApplicationRecord
    validates :email, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    def password
        @password
    end
end