interface AuthorBoxProps {
  name: string
  role: string
  experience: string
  imageUrl: string
}

export function AuthorBox({ name, role, experience, imageUrl }: AuthorBoxProps) {
  return (
    <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={`${name} - ${role}`}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div className="text-sm text-gray-600">
        <strong className="block text-gray-800">{name}</strong>
        {role}
        <br />
        <em>{experience}</em>
      </div>
    </div>
  )
}

