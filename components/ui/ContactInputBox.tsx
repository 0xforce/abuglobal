interface inputBoxProps {
    type: string;
    placeholder: string,
    name: string;
    value: any;
    onChange: any;
}

const ContactInputBox = ({ type, placeholder, name, value, onChange }: inputBoxProps) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
        />
      </div>
    </>
  );
};

export default ContactInputBox