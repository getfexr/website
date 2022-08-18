import {
  Dropdown, Card, Checkbox, Label, TextInput, Button,
} from 'flowbite-react';
import React from 'react';

const dropdownItems = [
  'Smart Lock',
  'Payments on Blockchain',
  'Documents on Blockchain',
  'Tokenisation of Data',
];

const checkBoxes = [
  'Is the project open source?',
  'I am authorised to represent my company in discussions with Fexr.',
];

function ApplyForm() {
  return (
    <div className="min-w-[30%] max-w-lg">
      <Card>
        <form>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Your email"
              />
            </div>
            <TextInput
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <div className="mb-2 mt-2 block">
              <Label
                htmlFor="url"
                value="Your website"
              />
            </div>
            <TextInput
              name="url"
              type="url"
              placeholder="https://example.com"
              required
            />
          </div>

          <div>
            <div className="mb-2 mt-2 block">
              <Dropdown label="How do you plan to integrate with Fexr?">
                {dropdownItems.map((opt) => (
                  <Dropdown.Item>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={opt}
                      />
                      <Label htmlFor={opt} value={opt} />
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>

          </div>

          {checkBoxes.map((value) => (
            <div className="flex items-center gap-2">
              <Checkbox value={value} />
              <Label htmlFor={value} value={value} />
            </div>
          ))}

          <div className="mt-10">
            <Button>
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ApplyForm;
