interface textAreaProps {
    row: number;
    placeholder: string,
    name: string;
    value: any;
    onChange: any;
}

const ContactTextArea = ({ row, placeholder, name, value, onChange }: textAreaProps) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </>
  );
};

export default ContactTextArea