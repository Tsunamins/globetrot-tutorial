class User < ApplicationRecord
    has_secure_password

    belongs_to :hometown, class_name: "Location"
    #belongs to a hometown which comes from the class name (model) location
    #aliasing examples
end
